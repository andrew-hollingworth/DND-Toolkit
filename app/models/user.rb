class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true, on: :create
  validates :email, presence: true, uniqueness: true, on: :create
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, on: :create
  validates :password, length: { minimum: 6 }, on: :create

  has_many :screens
end
