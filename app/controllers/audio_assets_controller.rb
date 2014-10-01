class AudioAssetsController < ApplicationController

	def load
		@key =  params[:key]
		# s3 = AWS::S3.new
		# bucket = s3.buckets['foxi-drum-machine-assets']
		# @url = bucket.objects['ClosedHat_ac_close.wav'].public_url
	end

end
