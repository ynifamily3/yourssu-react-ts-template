# 특이사항
- `yarn add react-dom@npm:@hot-loader/react-dom` 로 `react-dom`을 `hot loader`로 덮어씀
- `webpack dev`모드에서 디버깅 중 발생한 에러의 디테일을 오버레이로 보여주지 않는 버그가 있어서, [링크](https://github.com/webpack/webpack-dev-server/issues/2786#issuecomment-846366828) 의 조치대로 수행
  - `"webpack-dev-server": "^4.0.0-beta.3"`
# 디버깅 시 팁
- hmr의 로그 메시지가 시끄러우면 크롬 로그 필터에 `-[webpack-dev-server] -[HMR]`를 입력하면 조용해집니다.
