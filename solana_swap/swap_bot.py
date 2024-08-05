import os
import asyncio
from .swap import swap_sol_for_tokens, swap_tokens_for_sol

def main():
    sol_amount = 1_000_000_000  # Example: 1 SOL = 1_000_000_000 lamports
    spl_token_mint_address = "TokenMintAddressHere"  # Replace with actual SPL token mint address
    spl_token_account_pubkey = "TokenAccountPubkeyHere"  # Replace with actual SPL token account public key

    # Swap SOL for SPL tokens
    asyncio.run(swap_sol_for_tokens(sol_amount, spl_token_mint_address))

    # Swap SPL tokens for SOL
    asyncio.run(swap_tokens_for_sol(100_000_000, spl_token_account_pubkey))  # Example: 0.1 SPL token

if __name__ == "__main__":
    main()