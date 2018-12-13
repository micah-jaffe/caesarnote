class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.as_json(full_messages: true), status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
