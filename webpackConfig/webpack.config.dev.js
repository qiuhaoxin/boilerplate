const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const paths=require('./paths');
const OpenBrowser=require('open-browser-webpack-plugin');


module.exports={
  mode:'development',
	entry:[
       paths.appEntry,
  ],
	resolve:{
		extensions:['.js','.jsx','.less','.css','.jsx','.json'],
	},
  devtool:'inline-source-map',
	module:{
		rules:[
           {
           	  // test:/\.(png|jpe?g|gif|svg)$/,
              // exclude:[/node_modules/],
           	  // use:[
              //    {
              //    	loader:'url-loader',
              //    	options:{
              //          limit:8192,
              //          fallback:'file-loader',
              //    	}
              //    }
           	  // ]

              test:/\.(jpe?g|png|svg|gif)/,
              loader:'url-loader',
           },{
           	  test:/\.(js|jsx)$/,
           	  loader:require.resolve('babel-loader'),
           	  include:path.resolve(__dirname,'../src'),
           },{
              test:/\.(css)$/,
              use: [
                    require.resolve('style-loader'),
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                      },
                    },
                  ],
                //}
              //)
           },{
              test:/\.less$/,
              include:path.resolve(__dirname,'../src'),
              use: [
                    require.resolve('style-loader'),
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                      },
                    },
                    require.resolve('less-loader'),
                  ],
           },{
               test: /\.(eot|woff|svg|ttf|woff2|appcache)(\?|$)/,
               exclude: /^node_modules$/,
               loader: 'file-loader?name=[name].[ext]',
           }
		]
	},
  output:{
    path:path.resolve(__dirname,"../dist"),
    filename:'bundle.js',
    publicPath: "/"
  },
    plugins:[
       new webpack.DefinePlugin({
          REQUESTURL:JSON.stringify('test'),
       }),
       new HtmlWebpackPlugin({
          template:paths.appHtml,
          inject:true,
          title:'devServer',
       }),
       new OpenBrowser({url:'http://localhost:3009'}),
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin(),//HotModuleReplacementPlugin
  ]
}