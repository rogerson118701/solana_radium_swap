import os
from solana.rpc.api import Client
from solana.keypair import Keypair
from spl.token import Token
from .config import SOLANA_SECRET_KEY, PROGRAM_ID
from .utils import calculate_fee
from .exceptions import SwapError

RPC_URL = "https://api.mainnet-beta.solana.com"
client = Client(RPC_URL)

def load_wallet():
    secret_key_bytes = bytes(map(int, SOLANA_SECRET_KEY.split(',')))
    return Keypair.from_secret_key(secret_key_bytes)

async def swap_sol_for_tokens(amount_in, token_mint_address):
    wallet = load_wallet()
    fee = calculate_fee(amount_in)
    amount_after_fee = amount_in - fee

    # Placeholder for the swap logic
    # You would interact with the Raydium protocol here
    print(f"Swapping {amount_after_fee} SOL for tokens, with a fee of {fee} SOL.")

async def swap_tokens_for_sol(amount_in, token_account_pubkey):
    wallet = load_wallet()
    fee = calculate_fee(amount_in)
    amount_after_fee = amount_in - fee

    # Placeholder for the swap logic
    # You would interact with the Raydium protocol here
    print(f"Swapping {amount_after_fee} tokens for SOL, with a fee of {fee} SOL.")