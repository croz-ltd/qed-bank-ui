FROM node

# Add and build all as root
ADD . /home/appuser
WORKDIR /home/appuser
RUN npm install && npm install -g serve

# Add app user and fix permissions
RUN groupadd -r appuser && \
	useradd --no-log-init -r -g appuser appuser && \
	chown -R appuser:appuser /home/appuser
USER appuser

EXPOSE 5000

ENTRYPOINT ["serve", "-s", "build"]