class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: { password: "Invalid username or password" }, status: 401
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: "No user to log out", status: 404
    end
    
  end
end
