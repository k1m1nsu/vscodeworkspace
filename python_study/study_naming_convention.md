# Python naming convention

## variable, function, function parameter,module, package

**소문자**를 사용하고 여러 단어의 경우에는 단어 사이에 **언더스코어**를 사용한다.

_example)_

**my_variable**, **calculate_sum(num1, num2)**, **my_module**, **package_example**

## constant

**대문자**로 쓰고 필요하면 **언더스코어**를 사용한다.

_example)_

**MAX_VALUE**, **PI**

## class

**UpperCamelCase**

_example)_

**MyClass**

## etc.

​

```python
for __ in range(100):
    print('If you dont use variable, Use __')

class MyClass():
    __init__(self):
        self._protected_attribute = 'Use _ for protected attribute'
        self.__private_attribute = 'Use __ for private attribute'
```
