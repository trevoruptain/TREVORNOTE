Rails.application.routes.draw do
  get 'static_pages/root' => 'static_pages#root'
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :notes, only: [:index, :show, :create, :destroy, :update]
    resources :notebooks, only: [:index, :show, :create, :destroy, :update] do
      resources :notes, only: [:index]
    end
    resources :tags, only: [:index, :show, :create, :destroy, :update] do
      resources :notes, only: [:index]
    end
    resources :taggings, only: [:create]
    delete 'taggings', :to => 'taggings#destroy'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
