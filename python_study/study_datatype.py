# Data type stduy

# Number
num = 1
type(num) # int

num = 1.1 #float

num = 0o177 # 127    

num = 0x8ff # 2303   


a = 7
b = 3

print(a/b)  # 2.33333335
print(a//b) # 2 quotient 
print(a%b)  # 1 remain
print(a**b) # 343 a^b 7 cubed , bth power of a , a to the power of b

type(10/5) # float 2.0
type(int(10/5)) # int 2

#print(a+'th') # error

# String

# Using single quote
name = 'barney'

# Using double quote
name = "barney"

# multiline

name = '''
My name is Kim In Su.
You can call me Su
'''
firstname = 'Barney'
lastname = 'Stinson'
fullname = firstname + lastname # BarneyStinson

char = "="
print(char*5) # =====

len(firstname) # 6

# firstname[start index(included) : end index(not included) : step ]
firstname[0] # B
firstname[-1] # y
firstname[:] # Barney
firstname[::2] # Bre


strformat = 'I ate %d apples' % 3 # 'I ate 3 apples'  %d for Integer 

strformat = 'Ten divided by three = %f' % (10/3) # 'Ten divided by three = 3.333333'  %f for float

strformat = 'Ten divided by three = %.2f' % (10/3) # 'Ten divided by three = 3.33'

strformat = 'My name is %s' % "insu" # 'My name is insu' %s for string

strformat = 'I ate %s apples' % 3 #'I ate 3 apples'  auto convert int to str

strformat = 'Ten divided by three = %.3s' % (10/3) # 'Ten divided by three = 3.3'

strformat = '%10s' % 'hi' # '        hi'

strformat = '%-10s' % 'hi' # 'hi        '

strformat = '%3s' % '12345' # '12345'

strformat = 'My name is {0} {1}'.format("Kim",'Insu') # 'My name is Kim Insu'

firstname = 'Barney'
lastname = 'Stinson'
strformat = 'My name is {0} {lastname}'.format(firstname,lastname=lastname) # 'My name is Barney Stinson'

# f string formatting supported Python 3.6 
strformat = f'My name is {firstname} {lastname}' # 'My name is Barney Stinson'

strformat = f'Ten divided by five is {10/5}' # 'Ten divided by five is 2.0'



'''
이런 숫자나 문자는 메모리 주소를 참조하는 것이다.
같은 값을 가진다면 같은 메모리 주소를 가진다
리스트나 딕셔너리 집합 튜플은 같은 값을 가져도 다른 메모리 주소를 참조한다.
'''
str1 = 'hi'
str2 = 'hi'

str1==str2 # True
str1 is str2 # True

ls1 =[]
ls2 =[]

ls1 == ls2 # True
ls1 is ls2 # False