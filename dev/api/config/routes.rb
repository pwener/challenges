Rails.application.routes.draw do
  devise_for :admins
  # Api definition
  resources :admins
end
