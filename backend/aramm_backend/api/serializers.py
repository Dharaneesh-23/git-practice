# from rest_framework import serializers
# from .models import *

# class patientSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PatientDetails
#         fields = ['fname','lname','contact','mailid','address']

from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username","password"]
        extra_kwargs = {"password": {"write_only":True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class TimeslotSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientDetails
        fields = ['appointmenttime']

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientDetails
        fields = ["id","fname","lname","contact","mailid","address","appointmentdate","servicetype","appointmenttime"]
        extra_kwargs = {"id":{"read_only":True}}

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id','name','subject','mailid','message','phoneno','gender']
        extra_kwargs = {"id":{"read_only":True}}

class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageDetails
        fields = ['id','title1','content','img1']
        extra_kwargs = {"id":{"read_only":True}}

class PackageDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageDescription
        fields = ['id','package_id','des_title','des_type','des_content','des_img']
        extra_kwargs = {"id":{"read_only":True}}

class PackageNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageDetails
        fields = ['id','title1']

class BeforeAfterSerializer(serializers.ModelSerializer):
    class Meta:
        model = BeforeAfterImage
        fields = ['id','package_id','BAimage','name']
        extra_kwargs = {"id":{"read_only":True}}

class AdminstrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administration
        fields = ['id','username','password','privilege','mailid']
        extra_kwargs = {"id":{"read_only":True}}

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['id','name','img']

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id','name','file','toplay']

class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = ['email_id']

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id','userName','phoneNumber','email','gender','starCount','review']
        

    