from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class EventImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventImage
        fields = '__all__'

class EventSpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventSpeaker
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class EventAttendanceSerializer(serializers.ModelSerializer):
    user_details = UserSerializer(source='user', read_only=True)
    class Meta:
        model = EventAttendance
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    images = EventImageSerializer(many=True, read_only=True)
    speakers = EventSpeakerSerializer(many=True, read_only=True)
    attendees = EventAttendanceSerializer(many=True, read_only=True)
    class Meta:
        model = Event
        fields = '__all__'
