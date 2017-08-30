class Api::ThreadsController < ApplicationController

  def index
    @threads = (Thread.where(user_one_id: params[:user][:id]) ||
                Thread.where(user_two_id: params[:user][:id])

    render :index
  end

  def create
    @thread = Thread.new(thread_params)

    if @thread.save
      render :show
    else
      render json: @thread.errors.full_messages, status: 422
    end
  end

  def show
    @thread = Thread.find_by(id: params[:thread][:id])
    render :show
  end

  private

  def thread_params
    params.require(:thread).permit(:user_one_id, :user_two_id)
  end

end
