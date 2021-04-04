class WelcomeController < ApplicationController
  def index
    @count = params[:count].to_i
    @increment_count = @count + 1
    @decrement_count = @count - 1
  end
end
