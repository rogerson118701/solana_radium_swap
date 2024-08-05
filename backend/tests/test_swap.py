import unittest

class TestSwapFunctions(unittest.TestCase):
    def test_calculate_fee(self):
        from solana_swap.utils import calculate_fee
        self.assertEqual(calculate_fee(1000, 1), 10)

if __name__ == '__main__':
    unittest.main()