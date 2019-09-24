Rails.application.routes.draw do
  devise_for :admins
  # Api definition
  resources :admins, only: [:show, :create, :update, :destroy]
  resources :sessions, only: [:create, :destroy]
end
