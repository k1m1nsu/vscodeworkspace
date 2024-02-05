'''
try:
    pass
except [발생오류] :
    pass
except [발생오류2] as e:
    print(e)
except Exception as e :
    print('모든에러를 받을 수 있는 부분 이 구절이 위로가면 밑에있는게 실행안되겠죠?')
    print('이게 가능하다는건 모든 에러가 Exception 클래스를 상속받아서 만든다는거')
else:
    print('에러가 발생되지 않았을 때만 실행되는 부분')
finally:
    print('에러의 발생여부와 상관없이 실행되는 부분')
    
'''

try:
    4/0
    print('위에서 오류가 발생하면 실행되지않음')
except ZeroDivisionError as e:
    print(e)
except Exception as e:
    print('모든 예외의 에러 메시지를 출력하고싶으면 Exception')
    print('모든 에러를 처리하는 excecpt구문이 먼저나오면 안되겠죵?')
    pass
else:
    print('에러가 발생되지 않았을 때만 실행되는 부분')
finally:
    print('에러의 발생여부와 상관없이 실행되는 부분')


class MyError(Exception):
    def __str__(self):
        return "에러 메시지 as e에서  'e'가 되시겠다."
