class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username],user_params[:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password"] , status: 422
    end
  end

  def destroy
    if current_user.nil?
      render json: ["Not logged in"], status: 422
      return
    end
    logout
    render json: {}
  end

  def user_params
    params.require(:user).permit(:username,:password)
  end
end
