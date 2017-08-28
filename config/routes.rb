Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :show]
    resources :answers, only: [:create, :index, :show, :update]
  end

end
