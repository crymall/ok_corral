class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.find_by(user_id: params[:user][:id])
    render :index
  end

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      @answers = Answer.find_by(user_id: params[:answer][:user_id])
      render :index
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.find_by(id: params[:answer][:id])
    render :show
  end

  def update
    @answer = Answer.find_by(id: params[:answer][:id])

    if @answer.update_attributes(answer_params)
      @answers = Answer.find_by(user_id: @answer.user_id)
      render :index
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:answer_num, :accepted_answers, :importance,
    :question_id, :user_id)
  end

end
