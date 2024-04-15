FROM node:20-alpine
WORKDIR /app

COPY --link ./package.json ./package-lock.json ./
COPY --link packages/common/package.json packages/common/
COPY --link packages/assessment/package.json packages/assessment/
COPY --link ./ .
RUN npm install --ci
# COPY scripts/build.sh scripts/run.sh ./scripts


RUN packages/assessment
RUN npm run build

# RUN ./scripts/build.sh
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
ENTRYPOINT npm start
