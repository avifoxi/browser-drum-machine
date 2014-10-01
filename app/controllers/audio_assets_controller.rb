class AudioAssetsController < ApplicationController

	def load

		key =  params[:key]
		format = params[:format]

		s3 = AWS::S3.new
		bucket = s3.buckets['foxi-drum-machine-assets']
		response = bucket.objects[key + "." + format].read

		if response
			send_data response, :type => 'audio/wav', :disposition => 'inline'
		else
			'load error with this sample, sorry!'
		end

	end

end
