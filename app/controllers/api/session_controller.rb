class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
              params[:user][:username],
              params[:user][:password]
              )

    if @user
      login(@user)
      render 'api/users/user'
    else
      render json: ['Invalid Credentials'], status: 422
    end
  end

  def destroy
    logout
    render 'api/users/user'
  end

end
