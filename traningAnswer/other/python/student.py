from human import human

class Student(Human):
  def __init__(self, school, name, age):
    self.school = school
    super(Student, self).__init__(name, age)
    
  def do_homework(self):
    print('English homework')

student1 = Student('人民路小学'，'小明', 18)
print(student1.school)
print(student1.name)
print(student1.age) 