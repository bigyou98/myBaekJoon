n, m = map(int,input().split())
num = 1
den = 1
n_m = 1

for i in range(1, n+1):
    num *= i
for i in range(1, m+1):
    den *= i
for i in range(1, (n-m)+1):
    n_m *= i
print(num // (den * n_m))