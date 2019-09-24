module Request
  module JsonHelpers
    def object_response
      @json_response ||= JSON.parse(response.body, symbolize_names: true)
    end
  end
end
