class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    if (!params[:user])
      @users = User.where("id != '#{current_user.id}'")
    elsif current_user.preference == "all"
      min_age = params[:user][:age_min].to_i
      max_age = params[:user][:age_max].to_i
      distance = params[:user][:distance].to_i
      @users = User.where("id != '#{current_user.id}'")
        .where("age >= '#{min_age}' and age <= '#{max_age}'")
        .within(distance, :origin => current_user)
    else
      min_age = params[:user][:age_min].to_i
      max_age = params[:user][:age_max].to_i
      distance = params[:user][:distance].to_i
      @users = User.where("id != '#{current_user.id}'")
        .where("age >= '#{min_age}' and age <= '#{max_age}'")
        .where("gender = '#{current_user.preference}'")
        .within(distance, :origin => current_user)
      end

    render :index
  end

  def show
    @user = User.find_by(id: params[:user])
    render :show
  end

  def update
    @user = current_user

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :zip,
      :age, :gender, :orientation, :age_min, :age_max, :distance,
      :summary, :doing_with_life, :good_at, :fav_media, :six_things,
      :thinking_about, :fri_night, :message_if, :image_url)
  end

end
