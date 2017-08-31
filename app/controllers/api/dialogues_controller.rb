class Api::DialoguesController < ApplicationController

  def index
    @dialogues = (Dialogue.where(user_one_id: params[:user][:id]) ||
                Dialogue.where(user_two_id: params[:user][:id]))

    render :index
  end

  def create
    @dialogue = Dialogue.new(dialogue_params)

    if @dialogue.save
      render :show
    else
      render json: @dialogue.errors.full_messages, status: 422
    end
  end

  def show
    @dialogue = Dialogue.find_by(id: params[:dialogue][:id])
    render :show
  end

  private

  def dialogue_params
    params.require(:dialogue).permit(:user_one_id, :user_two_id)
  end

end
