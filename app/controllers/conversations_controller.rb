class ConversationsController < ApplicationController
    def index
        @conversations = Conversation.all
        render json: @conversations, status: :ok
    end
end
