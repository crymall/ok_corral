class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
              params[:user][:username],
              params[:user][:password]
              )

    if @user
      login(@user)
      render '/api/users'
    else
      render json: ['Invalid Credentials'], status: 422
    end
  end

  def destroy
    logout
    render '/'
  end

end
