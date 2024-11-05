def comb_sum_unique(p, t):
    p.sort()
    res = []

    def backtrack(s, path, rem):
        if rem == 0:
            res.append(list(path))
            return
        for i in range(s, len(p)):
            if p[i] > rem:
                break
            if i > s and p[i] == p[i - 1]:
                continue
            path.append(p[i])
            backtrack(i + 1, path, rem - p[i])
            path.pop()

    backtrack(0, [], t)
    return len(res)
n,k = map(int, input().strip().split())
pieces = list(map(int, input().strip().split()))
result = comb_sum_unique(pieces, k)
print(result)