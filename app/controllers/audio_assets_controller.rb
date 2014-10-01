class AudioAssetsController < ApplicationController

	def load

		key =  params[:key]
		format = params[:format]

		puts key
		s3 = AWS::S3.new
		bucket = s3.buckets['foxi-drum-machine-assets']
		response = bucket.objects[key + "." + format].read

		if response
			send_data response, :type => 'audio/wav', :disposition => 'inline'
		else
			'sorry dude'
		end
		# respond_to do |format|
	 #    format.arraybuffer {}
  # 	end
	end

end
