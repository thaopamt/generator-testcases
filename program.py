A = int(input())
B = int(input())

L = max(3, A + 1)
R = B - 1

if L > R:
    print(0)
else:
    def sum_divisible(a, b):
        if a > b:
            return 0
        first = a + (3 - a % 3) % 3
        if first > b:
            return 0
        last = b - (b % 3)
        n = (last - first) // 3 + 1
        return n * (first + last) // 2

    def sum_mod1(a, b):
        if a > b:
            return 0
        remainder_a = a % 3
        first = a + ((1 - remainder_a) % 3)
        if first > b:
            return 0
        remainder_b = b % 3
        subtract = (remainder_b - 1 + 3) % 3
        last = b - subtract
        if last < a:
            return 0
        n = (last - first) // 3 + 1
        return n * (first + last) // 2

    sum0 = sum_divisible(L, R)
    sum1 = sum_mod1(L, R)
    print(sum0 + sum1)
