from flask import Flask, render_template, request, send_file, jsonify
import os
import yt_dlp

app = Flask(__name__)

# Automatically detect the user's default download folder
DOWNLOAD_FOLDER = os.path.join(os.path.expanduser('~'), 'Downloads')
if not os.path.exists(DOWNLOAD_FOLDER):
    os.makedirs(DOWNLOAD_FOLDER)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/download', methods=['POST'])
def download_video():
    video_url = request.form['url']
    resolution = request.form['resolution']
    try:
        ydl_opts = {
            'format': f'bestvideo[height<={resolution}]+bestaudio/best',
            'outtmpl': os.path.join(DOWNLOAD_FOLDER, '%(title)s.%(ext)s'),
            'headers': {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([video_url])
        
        downloaded_file = os.path.join(DOWNLOAD_FOLDER, f"{ydl.prepare_filename(ydl.extract_info(video_url))}")
        
        return send_file(downloaded_file, as_attachment=True)
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

@app.route('/hello')
def hello():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)
