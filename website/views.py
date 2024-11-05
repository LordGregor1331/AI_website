import json
import os
from flask import Blueprint, render_template, redirect, url_for, request, jsonify, current_app
from .models import Users, db
from flask_login import login_user, login_required, current_user
import random

views = Blueprint('views', __name__)


@views.route('/')
def index():
    if not current_user.is_authenticated:
        # Example user creation (modify as per your authentication logic)
        new_user = Users(
            tg_id=random.randint(1000000, 9999999),  # Simulate a unique Telegram ID
            tg_username='hello',
            tg_first_name='sdsd',
            tg_last_name='sadsadsf',
            tg_is_premium=False
        )

        # Add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        login_user(new_user)

    return render_template('index.html')

