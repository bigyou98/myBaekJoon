n = int(input())
array = set(map(int,input().split()))

m= int(input())
X = list(map(int,input().split()))

for i in X:
    if i in array:
        print(1)
    else:
        print(0)
