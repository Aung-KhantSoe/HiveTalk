#!/bin/bash
mkdir -p /home/ec2-user/Desktop/HiveTalk
cd /home/ec2-user/Desktop/HiveTalk
git pull origin circleci-project-setup
source venv/bin/activate
pip install -r backend/requirements.txt
cd frontend
npm install
npm run build
sudo systemctl restart my-backend-service
