from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from App.views import *

admin.site.site_header = 'ISTE Website Admin Page'
admin.site.index_title = 'Admin page'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls', namespace = 'home')),
    path('account/', include('account.urls', namespace = 'account')),
    path('project/', include('project.urls', namespace = 'project')),
    path('event/', include('event.urls', namespace = 'event')),
    path('recs/', include('recruitment.urls', namespace = 'recruitment')),
    path('sig/',include('sig.urls', namespace = 'sig')),
    path('team/',include('team.urls', namespace = 'team')),
    path('leaderboard/',include('leaderboard.urls', namespace = 'leaderboard')),
    path('ckeditor/',include('ckeditor_uploader.urls')),

    path('obscura/',initialPage, name = 'Initial'),
    path('obscura/cover/', coverPage, name = 'Cover'),
    path('obscura/login/', loginPage, name = 'Login'),
    path('obscura/register/', registerPage, name = 'Register'),
    path('obscura/home/', homePage,name = 'Home'),
    path('obscura/brickbreaker/',brickbreaker ,name = 'BrickBreaker'),
    path('obscura/flappy/', flappy,name = 'Flappy'),
    path('obscura/pianotiles/', pianotiles, name = 'PianoTiles'),
    path('obscura/snake/', twotho,name = 'TwoTho'),
    path('obscura/typing/', typing,name = 'Typing'),
    path('obscura/question/<diff>/<node>', question, name = 'Question'),
    path('obscura/gallery/', galleryPage, name = 'Gallery'),
    path('obscura/logout/',logout,name='Logout'),
    path('obscura/leaderboard/', leaderboardPage, name='LeaderBoard'),
    path('obscura/instructions/', instructionPage, name = 'Instructions'),
    path('obscura/galleryview/<nodeNumber>', galleryView, name='GalleryView'),
    path('obscura/base/',baseView,name='BaseView')
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)