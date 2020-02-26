### 计算两个数a，b的最大公约数

```
let gcd = (a, b) => {
        if(b === 0) {
            return a
        }  else {
            return gcd(b, a%b)
        }
    }
```