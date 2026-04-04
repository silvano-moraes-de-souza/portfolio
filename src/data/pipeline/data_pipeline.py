import asyncio
import pandas as pd

class DataPipeline:
    """Orquestra ETL."""
    
    def __init__(self, src):
        self.src = src

    async def _connect(self):
        # Lógica para conectar ao ERP (TOTVS/SAP)
        pass

    async def extract(self):
        # Conecta ao ERP e extrai dados brutos
        raw = await self._connect()
        return [r.dict() for r in raw]

    def transform(self, data):
        # Limpa e transforma os dados em DataFrame
        ok = [self._clean(r) for r in data]
        return pd.DataFrame(ok)

    def _clean(self, r):
        # Lógica de limpeza individual
        return r

    async def load(self, df):
        # BigQuery + PowerBI
        await bq.insert(df)
        pbi.refresh("ops")

async def main():
    p = DataPipeline("totvs")
    raw = await p.extract()
    df = p.transform(raw)
    await p.load(df)
    print("✅ Pipeline OK")

if __name__ == "__main__":
    asyncio.run(main())