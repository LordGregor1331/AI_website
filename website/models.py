# -*- coding: utf-8 -*-
from flask_login import UserMixin
from sqlalchemy import ForeignKey, func, DateTime
from sqlalchemy.orm import relationship
from website import db
from datetime import datetime


class Referral(db.Model):
    __tablename = 'referrals'

    id = db.Column(db.Integer, primary_key=True)
    referrer_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    referred_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    referrer_rewards = db.Column(db.Float, nullable=False, default=0.0)

    # Relationships to access the referrer and referred user
    referrer = db.relationship('Users', foreign_keys=[referrer_id], backref='referrals_made', lazy=True)
    referred_user = db.relationship('Users', foreign_keys=[referred_user_id], backref='referrals_received', lazy=True)

    def __repr__(self):
        return f'<Referral from {self.referrer.tg_username} to {self.referred_user_name}>'


class Users(db.Model, UserMixin):
    __tablename = 'users'

    id = db.Column(db.Integer, primary_key=True)
    tg_id = db.Column(db.Integer, unique=True, nullable=False)
    tg_username = db.Column(db.String(80), nullable=True)
    tg_first_name = db.Column(db.String(25), nullable=True)
    tg_last_name = db.Column(db.String(25), nullable=True)
    tg_is_premium = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<User {self.tg_username}>'
