from django.urls import path
from . import views

urlpatterns = [
    path('patient/createpatient/',views.PatientListCreate.as_view(),name="patientcreate"),
    path('patient/listpatients/',views.PatientList.as_view(),name="patientlist"),
    path('patient/deletepatients/<int:pk>/',views.patientDelete.as_view(),name="patientdelete"),
    path('admistrator/createadmin/',views.AdministrationCreate.as_view(),name="admincreate"),
    path('admistrator/listadmin/',views.AdministrationList.as_view(),name="adminlist"),
    path('admistrator/deleteadmin/<int:pk>/',views.AdministrationDelete.as_view(),name="admindelete"),
    path('patient/listappointment/',views.TimeSlot.as_view(),name="appointmenttime"),
    path('package/createpackage/',views.PackageCreate.as_view(),name="packagecreate"),
    path('package/listpackage/',views.PackageList.as_view(),name="packagelist"),
    path('package/deletepackage/<int:pk>/',views.PackageDelete.as_view(),name="deletepackage"),
    path('package/updatepackage/<int:pk>/',views.PackageUpdate.as_view(),name="updatepackage"),
    path('package/listpackagenames/',views.ListPackagenames.as_view(),name="packagenamelist"),
    path('package/createdescription/',views.CreatePackageDescription.as_view(),name="createdescription"),
    path('package/updatepackagedescription/<int:pk>/',views.UpdatePackageDescription.as_view(),name='updatepackagedescription'),
    path('package/listdescription/',views.ListPackageDescriptionAll.as_view(),name="listdescription"),
    path('package/listdescription1/<int:package_id>/',views.ListPackageDescription.as_view(),name="listdescription1"),
    path('package/deletedescription/<int:pk>/',views.DeletePackageDescription.as_view(),name="deletedescription"),
    path('package/createBAimage/',views.CreateBAimage.as_view(),name="createBAimage"), #
    # path('package/updateBAimage/<int:pk>/',views..as_view(),name='updatepackagedescription'),
    path('package/listBAimage/',views.ListBAimageAll.as_view(),name="listBAimage"),
    path('package/listBAimage1/<int:package_id>/',views.ListBAimage.as_view(),name="listBAimage1"),
    path('package/deleteBAimage/<int:pk>/',views.DeleteBAimage.as_view(),name="deleteBAimage"),  #
    path('review/listreview/',views.ListReview.as_view(),name='listreview'),
    path('review/createreview/',views.CreateReview.as_view(),name='createreview'),
    path('gallery/creategallery/', views.GalleryCreate.as_view(),name="gallerycreate"),
    path('gallery/listgallery/', views.GalleryList.as_view(),name="gallerylist"),
    path('gallery/deletegallery/<int:pk>/', views.GalleryDelete.as_view(),name="gallerydelete"),
    path('video/createvideo/',views.VideoCreate.as_view(),name="createvideo"),
    path('video/listvideo/',views.VideoList.as_view(),name="listvideo"),
    path('video/deletevideo/<int:pk>/',views.VideoDelete.as_view(),name="deletevideo"),
    path('video/updatevideo/<int:pk>/',views.VideoUpdate.as_view(),name="updatevideo"),
    path('testimonial/createtestimonial/',views.CreateTestimonialView.as_view(),name="createtestimonial"),
    path('testimonial/listtestimonial/',views.ListTestimonialView.as_view(),name="Listall"),
    path('testimonial/listtestimonial7/',views.ListLimitedTestimonialView.as_view(),name="List7"),
    path('testimonial/updatetestimonial/<int:pk>/',views.UpdateTestimonialView.as_view(),name="updatetestimonial"),
    path('testimonial/deletetestimonial/<int:pk>/',views.DeleteTestimonialView.as_view,name="deletetestimonial"),
    # continue from here

    path('sendemail/', views.SendEmailView.as_view(), name='send_email'),
    path('createsubscription/',views.CreateSubscription.as_view(),name='createsubscription'),
    path('listsubscription/',views.ListSubscription.as_view(),name='listsubscription'),
    # path('api/package/<int:pk>/delete/', PackageDetailsDelete.as_view(), name='package-delete'),
]