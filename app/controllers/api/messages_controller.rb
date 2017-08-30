class Api::MessagesController < ApplicationController

  def index
    @messages = Message.where(thread_id: params[:thread][:id])
    render :index
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def show
    @message = Message.find_by(params[:message][:id])
    render :show
  end

  private

  def message_params
    params.require(:message).permit(:user_id, :thread_id, :body)
  end

end
