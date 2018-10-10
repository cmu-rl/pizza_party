echo "[Unit]" >> ./tmp
echo "Description=Leaderboard Service" >> ./tmp
echo "After=multi-user.target" >> ./tmp
echo "" >> ./tmp
echo "[Service]" >> ./tmp
echo "Type=simple" >> ./tmp
echo "StandardOutput=journal" >> ./tmp
echo "StandardError=journal" >> ./tmp
echo "ExecStart=/home/ubuntu/pizza_party/leaderboard/start.sh" >> ./tmp
echo "" >> ./tmp
echo "[Install]" >> ./tmp
echo "WantedBy=multi-user.target" >> ./tmp

chmod 644 ./tmp
mv ./tmp /lib/systemd/system/leaderboard.service
