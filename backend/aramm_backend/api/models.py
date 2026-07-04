from django.db import models
from django.contrib.auth.hashers import make_password,check_password
from datetime import date

# Create your models here.
class PatientDetails(models.Model):
    fname = models.CharField(max_length = 30)
    lname = models.CharField(max_length = 30)
    contact = models.CharField(max_length = 14)
    mailid = models.CharField(max_length = 50)
    address = models.TextField()
    appointmentdate = models.DateField(default = date.today)
    appointmenttime = models.TimeField()
    servicetype = models.CharField(default = "Medical Treatment",max_length = 30)

    def __str__(self) :
        return self.fname,self.lname
    
class Administration(models.Model):
    username = models.CharField(max_length = 30)
    password = models.CharField(max_length = 30)
    privilege = models.BooleanField()
    mailid = models.CharField(max_length = 50)
    
    def __str__(self):
        return self.username
    
class PackageDetails(models.Model):
    title1 = models.CharField(max_length = 50)
    # title2 = models.CharField(max_length = 50)
    content = models.TextField(max_length = 1000)
    img1 = models.ImageField(upload_to='rectangle_image')
    # img2 = models.ImageField(upload_to='round_image')
    # c1 = models.CharField(max_length = 30)
    # c2 = models.CharField(max_length = 30)
    # c3 = models.CharField(max_length = 30)

    def __str__(self) -> str:
        return self.title1

class PackageDescription(models.Model):
    package_id = models.ForeignKey(PackageDetails,on_delete = models.CASCADE)
    des_title = models.CharField(max_length = 100)
    des_type = models.BooleanField()                # to identity whether it is pointwise(True) or paragraph(False)
    des_content = models.TextField()
    des_img = models.ImageField(upload_to='Description_images', blank=True)
    
    def __str__(self) -> str:
        return self.des_title    

class Review(models.Model):
    name = models.CharField(max_length = 50,default = '')
    subject = models.CharField(max_length = 255, default = '')
    phoneno = models.CharField(max_length = 20, default = '')
    mailid = models.CharField(max_length = 250,default = '')
    gender = models.CharField(max_length = 250,default = '')
    message = models.TextField(default = '')

    def __str__(self) -> str:
        return self.name

class Gallery(models.Model):
    name = models.CharField(max_length = 50)
    img = models.ImageField(upload_to='home_gallery')

    def __str__(self) -> str:
        return self.name

class Video(models.Model):
    name = models.CharField(max_length = 50)
    file = models.FileField(upload_to='Home video')
    toplay = models.BooleanField()

    def __str__(self) -> str:
        return self.name
    
class Subscription(models.Model):
    email_id = models.EmailField(unique = True)

class BeforeAfterImage(models.Model):
    package_id = models.ForeignKey(PackageDetails   ,on_delete = models.CASCADE)
    BAimage = models.ImageField(upload_to='Before After Image')
    name = models.CharField(max_length = 50,default = '')

    def save(self, *args, **kwargs):
        # Automatically assign the name from the related package's title1
        self.name = self.package_id.title1
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.name


class Testimonial(models.Model):
    userName = models.CharField(max_length=255)
    phoneNumber = models.CharField(max_length=20)
    email = models.EmailField()
    gender = models.CharField(max_length=6)
    starCount = models.IntegerField(choices=[(i, i) for i in range(1, 6)], default=5)
    review = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return f"Feedback of {self.userName} - {self.phoneNumber}"
    



