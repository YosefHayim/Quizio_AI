# script.py
import sys
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import JSONFormatter

def getCaptionsByVideoId(video_id: str):
    transcript = YouTubeTranscriptApi().fetch(video_id)
    formatter = JSONFormatter()
    json_formatted = formatter.format_transcript(transcript)
    print(json_formatted)
    return json_formatted

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Missing video ID", file=sys.stderr)
        sys.exit(1)
    getCaptionsByVideoId(sys.argv[1])
