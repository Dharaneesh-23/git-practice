from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics,views
from .serializers import *
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import PatientDetails,Administration,PackageDetails,Review
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser,FormParser

from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.conf import settings

import random


#Create VIews here

class TimeSlot(generics.ListAPIView):
    serializer_class = TimeslotSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        date = self.request.query_params.get('date', None)
        if date:
            # print(date)
            return PatientDetails.objects.filter(appointmentdate=date)
        else:
            return PatientDetails.objects.none()  # or return default queryset

class PatientList(generics.ListAPIView):
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]
    queryset = PatientDetails.objects.all()

class PatientListCreate(generics.CreateAPIView):
    # queryset = PatientDetails.objects.all()
    # serializer_class = PatientSerializer
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]
    queryset = PatientDetails.objects.all()

    # def get_queryset(self):
    #     user = self.request.user
    #     # return PatientDetails.objects.filter(author=user)   #only when the user is specified
    #     return PatientDetails.objects.all()
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class patientDelete(generics.DestroyAPIView):
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]
    # queryset = PatientDetails.objects.all()

    def get_queryset(self):
        return PatientDetails.objects.all()

class AdministrationCreate(generics.CreateAPIView):
    serializer_class = AdminstrationSerializer
    permission_classes = [AllowAny]
    queryset = Administration.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class AdministrationList(generics.ListAPIView):
    serializer_class = AdminstrationSerializer
    permission_classes = [AllowAny]
    queryset = Administration.objects.all()

class AdministrationDelete(generics.DestroyAPIView):
    serializer_class = AdminstrationSerializer
    permission_classes = [AllowAny]
    # queryset = Administration.objects.all()

    def get_queryset(self):
        return Administration.objects.all()

class PackageList(generics.ListAPIView):
    serializer_class = PackageSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()

class PackageCreate(generics.CreateAPIView):
    serializer_class = PackageSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class PackageDelete(generics.DestroyAPIView):
    serializer_class = PackageSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()

    def get_queryset(self):
        return super().get_queryset()

class PackageUpdate(generics.UpdateAPIView):
    serializer_class = PackageSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()

    def get_queryset(self):
        return super().get_queryset()

class ListPackagenames(generics.ListAPIView):
    serializer_class = PackageNameSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()

class CreatePackageDescription(generics.CreateAPIView):
    serializer_class = PackageDescriptionSerializer
    permission_classes = [AllowAny]
    queryset = PackageDescription.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class UpdatePackageDescription(generics.UpdateAPIView):
    serializer_class = PackageDescriptionSerializer
    permission_classes = [AllowAny]
    queryset = PackageDescription.objects.all()

class ListPackageDescription(generics.ListAPIView):
    serializer_class = PackageDescriptionSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        package_id = self.kwargs['package_id']
        return PackageDescription.objects.filter(package_id=package_id)
    
class ListPackageDescriptionAll(generics.ListAPIView):
    serializer_class = PackageDescriptionSerializer
    permission_classes = [AllowAny]
    queryset = PackageDescription.objects.all()

class DeletePackageDescription(generics.DestroyAPIView):
    serializer_class = PackageDescriptionSerializer
    permission_classes = [AllowAny]
    queryset = PackageDescription.objects.all()

    def get_queryset(self):
        return super().get_queryset()
    
class CreateBAimage(generics.CreateAPIView):
    serializer_class = BeforeAfterSerializer
    permission_classes = [AllowAny]
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class ListBAimage(generics.ListAPIView):
    serializer_class = BeforeAfterSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        package_id = self.kwargs['package_id']
        return BeforeAfterImage.objects.filter(package_id=package_id)
    
class ListBAimageAll(generics.ListAPIView):
    serializer_class = BeforeAfterSerializer
    permission_classes = [AllowAny]
    queryset = BeforeAfterImage.objects.all()

class DeleteBAimage(generics.DestroyAPIView):
    serializer_class = BeforeAfterSerializer
    permission_classes = [AllowAny]
    queryset = BeforeAfterImage.objects.all()

    def get_queryset(self):
        return super().get_queryset()

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]



class GalleryList(generics.ListAPIView):
    serializer_class = GallerySerializer
    permission_classes = [AllowAny]
    queryset = Gallery.objects.all()

class GalleryCreate(generics.CreateAPIView):
    serializer_class = GallerySerializer
    permission_classes = [AllowAny]
    queryset = Gallery.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class GalleryDelete(generics.DestroyAPIView):
    serializer_class = GallerySerializer
    permission_classes = [AllowAny]
    queryset = Gallery  .objects.all()

    def get_queryset(self):
        return super().get_queryset()

class VideoCreate(generics.CreateAPIView):
    serializer_class = VideoSerializer
    permission_classes = [AllowAny]
    queryset = Video.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class VideoList(generics.ListAPIView):
    serializer_class = VideoSerializer
    permission_classes = [AllowAny]
    queryset = Video.objects.all()

class VideoDelete(generics.DestroyAPIView):
    serializer_class = VideoSerializer
    permission_classes = [AllowAny]
    queryset = Video.objects.all()

class VideoUpdate(generics.UpdateAPIView):
    serializer_class = VideoSerializer
    permission_classes = [AllowAny]
    queryset = Video.objects.all()

class CreateReview(generics.CreateAPIView):
    serializer_class = ReviewsSerializer
    permission_classes = [AllowAny]
    queryset = Review.objects.all()

class ListReview(generics.ListAPIView):
    serializer_class = ReviewsSerializer
    permission_classes = [AllowAny]
    queryset = Review.objects.all()

class CreateTestimonialView(generics.CreateAPIView):
    serializer_class = TestimonialSerializer
    permission_classes = [AllowAny]
    queryset = Testimonial.objects.all()

class ListTestimonialView(generics.ListAPIView):
    serializer_class = TestimonialSerializer
    permission_classes = [AllowAny]
    queryset = Testimonial.objects.all()

class ListLimitedTestimonialView(generics.ListAPIView):
    serializer_class = TestimonialSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        all_testimonials = Testimonial.objects.all()
        return random.sample(list(all_testimonials),min(7,all_testimonials.count()))
        # return super().get_queryset()

class UpdateTestimonialView(generics.UpdateAPIView):
    serializer_class = TestimonialSerializer
    permission_classes = [AllowAny]
    queryset = Testimonial.objects.all()

class DeleteTestimonialView(generics.DestroyAPIView):
    serializer_class = TestimonialSerializer
    permission_classes = [AllowAny]
    queryset = Testimonial.objects.all()
    

class SendEmailView(generics.CreateAPIView):
    serializer_class = ReviewsSerializer  # Define your serializer class here
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        name = serializer.validated_data.get('name','')
        email = serializer.validated_data.get('mailid','')
        subject = serializer.validated_data.get('subject', '')
        message = serializer.validated_data.get('message', '')
        gender = serializer.validated_data.get('gender','')
        phoneno = serializer.validated_data.get('phoneno','')
        message = 'Hi, This is '+name+'. '+message+'\nGender: '+gender+'\nPhone: '+ phoneno+'\nMailID: '+email if (len(gender)!=0 and len(phoneno)!=0) else 'Hi, This is '+name+'. '+message+'\nMailID: '+email

        try:
            send_mail(subject, message, settings.EMAIL_HOST_USER, ['arammskinclinic@gmail.com'])
            return Response({'success': 'Email sent successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Failed to send email: {str(e)} {message}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CreateSubscription(generics.CreateAPIView):
    serializer_class = SubscriptionSerializer
    permission_classes = [AllowAny]
    queryset = Subscription.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
            mailid = serializer.validated_data.get('email_id')
            subject = "Thankyou for subscribing to our clinic. Stay updated with our updates !!"
            message = '''
            We are thrilled to welcome you to Aramm Skin Clinic! Thank you for subscribing to our updates.

            At Aramm Skin Clinic, we are dedicated to providing you with the latest health tips, clinic updates, and exclusive offers tailored just for you. By joining our mailing list, you’ll receive:

            - Health Tips & Advice: Stay informed with expert advice from our healthcare professionals.
            - Clinic Updates: Be the first to know about new services, facilities, and events at our clinic.
            - Exclusive Offers: Enjoy special discounts and promotions available only to our subscribers.
            We are committed to supporting your health journey and ensuring you have access to the best care and information.

            Stay connected with us on social media for more updates and health tips:
                - LinkedIn: [https://www.linkedin.com/company/aramm-skin-clinic/]
                - Instagram: [https://www.instagram.com/aramm.skinclinic]

            If you have any questions or need assistance, please don’t hesitate to reach out to us at arammskinclinic@gmail.com or [Your Clinic's Phone Number].

            Thank you for trusting Aramm Skin Clinic with your healthcare needs. We look forward to serving you!

            Warm regards,

            Dr.Abhinesh N,
            MBBS.,md (dermatology),
            Aramm Skin Clinic,
            4/19 , RC Church road , Pallavaram, Chennai - 600043.
            arammskinclinic@gmail.com
            [Your Clinic's Phone Number]
            '''

            html_content = f"""
                <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 10px;">
                        <h2 style="color: #2c3e50;">Welcome to <strong>Aramm Skin Clinic</strong></h2>
                        <p>We are thrilled to welcome you to <strong>Aramm Skin Clinic</strong>! Thank you for subscribing to our updates.</p>
                        <p>At <strong>Aramm Skin Clinic</strong>, we are dedicated to providing you with the latest health tips, clinic updates, and exclusive offers tailored just for you. By joining our mailing list, you’ll receive:</p>
                        <ul>
                            <li><strong>Health Tips & Advice:</strong> Stay informed with expert advice from our healthcare professionals.</li>
                            <li><strong>Clinic Updates:</strong> Be the first to know about new services, facilities, and events at our clinic.</li>
                            <li><strong>Exclusive Offers:</strong> Enjoy special discounts and promotions available only to our subscribers.</li>
                        </ul>
                        <p>We are committed to supporting your health journey and ensuring you have access to the best care and information.</p>
                        <p>Stay connected with us on social media for more updates and health tips:</p>
                        <p>
                            <a href="https://www.linkedin.com/company/aramm-skin-clinic/" style="color: #3498db;">LinkedIn</a> |
                            <a href="https://www.instagram.com/aramm.skinclinic" style="color: #e4405f;">Instagram</a>
                        </p>
                        <p>If you have any questions or need assistance, please don’t hesitate to reach out to us at <a href="mailto:arammskinclinic@gmail.com" style="color: #3498db;">arammskinclinic@gmail.com</a> or <a href="tel:[Your Clinic's Phone Number]" style="color: #3498db;">[Your Clinic's Phone Number]</a>.</p>
                        <p>Thank you for trusting <strong>Aramm Skin Clinic</strong> with your healthcare needs. We look forward to serving you!</p>
                        <p>Warm regards,</p>
                        <p><strong>Dr.Abhinesh N</strong><br>MBBS.,md (dermatology),<br>Aramm Skin Clinic<br>4/19 , RC Church road , Pallavaram, Chennai - 600043.<br><a href="mailto:arammskinclinic@gmail.com" style="color: #3498db;">arammskinclinic@gmail.com</a><br><a href="tel:[Your Clinic's Phone Number]" style="color: #3498db;">[Your Clinic's Phone Number]</a></p>
                    </div>
                </body>
                </html>
                """
            try:
                msg = EmailMultiAlternatives(subject, message, settings.EMAIL_HOST_USER, [mailid])
                msg.attach_alternative(html_content, "text/html")
                msg.send()
            except Exception as e:
                print(e)
        else:
            print(serializer.errors)

class ListSubscription(generics.ListAPIView):
    serializer_class = SubscriptionSerializer
    permission_classes = [AllowAny]
    queryset = Subscription.objects.all()

# class PatientRetrieve(generics.RetrieveAPIView):
#     queryset = PatientDetails.objects.all()
#     serializer_class = PatientSerializer
#     permission_classes = [AllowAny]

# class patientDelete(generics.DestroyAPIView):
#     serializer_class = PatientSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return PatientDetails.objects.all()






















# from django.shortcuts import render
# from rest_framework.views import APIView
# from .models import *
# from .serializers import *
# from rest_framework.response import Response


# # Create your views here.


# class ReactView(APIView):
#     def get(self,request):
#         output = [{"fname":i.fname,
#                     "lname":i.lname,
#                     "contact":i.contact,
#                     "mailid":i.mailid,
#                     "address":i.address}for i in PatientDetails.objects.all()]
#         return Response(output)
    
#     def post(self,request):
#         serializer = patientSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)