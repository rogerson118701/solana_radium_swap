import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

SOLANA_SECRET_KEY = os.getenv("SOLANA_SECRET_KEY")
PROGRAM_ID = os.getenv("PROGRAM_ID")