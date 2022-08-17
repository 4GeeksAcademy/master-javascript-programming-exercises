FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@24.8.0 -g
RUN npm i @learnpack/learnpack@2.1.8 -g && learnpack plugins:install @learnpack/node
